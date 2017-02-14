import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
  mutationWithClientMutationId,
  globalIdField,
  fromGlobalId,
  nodeDefinitions
} from 'graphql-relay';

import rp from 'request-promise';
import _ from 'lodash';
import config from './config';
import { repType } from './rep';

let userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    city: { type: GraphQLString, resolve: user => user.city },
    district: { type: GraphQLString, resolve: user => user.district },
    first_name: { type: GraphQLString, resolve: user => user.first_name },
    last_name: { type: GraphQLString, resolve: user => user.last_name },
    state_long: { type: GraphQLString, resolve: user => user.state_long },
    state_short: { type: GraphQLString, resolve: user => user.state_short },
    user_id: { type: GraphQLString, resolve: user => user.user_id },
    // reps: { type: new GraphQLList(repType), resolve: user => user.reps_data },
    error: { type: GraphQLString, resolve: user => user.error },
    // email: { type: GraphQLString, resolve: user => user.email },
    // password: { type: GraphQLString, resolve: user => user.password },
    // street: { type: GraphQLString, resolve: user => user.street },
    // zip_code: { type: GraphQLString, resolve: user => user.zipcode },
    // gender: { type: GraphQLString, resolve: user => user.gender },
    // dob: { type: GraphQLString, resolve: user => user.dob }
  })
});

export let Login = mutationWithClientMutationId({
  name: 'Login',
  inputFields: {
    clientMutationId: { type: GraphQLString, resolve: ({ clientMutationId }) => clientMutationId },
    email: { type: GraphQLString, resolve: ({ email }) => email },
    password: { type: GraphQLString, resolve: ({ password }) => password  }
  },
  outputFields: {
    user: {
      type: userType,
      resolve: user => user,
    }
  },
  mutateAndGetPayload: ({ email, password }) => {
    return new Promise(function(resolve, reject) {
      rp({
        method: 'POST',
        uri: `${config.backend.uri}/login`,
        body: { email, password },
        json: true
      }).then(response => {
        if (_.isEmpty(response)) {
          resolve(null);
        }
        else {
          let { results } = response;
          if (results && !!results.length) {
            let user = results[0];
            let { reps_data } = user;
            // NOTE/HACK: cleaning invalid json structures, need to refactor with @alexhubbard89
            user.reps_data = reps_data && reps_data.length
            ? Object.keys(reps_data[0]).map(key => reps_data[0][key])
            : [];
            user.reps_data.forEach(rep => {
              let { reps_membership } = rep;
              rep.reps_membership = reps_membership && reps_membership.length
              ? Object.keys(reps_membership[0]).map(key => reps_membership[0][key])
              : [];
            })
            resolve(user);
          }
          else {
            console.log({ error: 'Error logging in' });
            resolve({ error: 'Error logging in' });
          }
        }
      })
      .catch(err => {
        resolve({ 'Error in favorites Graphql Request': err });
      });
    });
  },
});

export let getUserSchema = () => {
  return {
    type: userType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: (__, args) => {
      let { email, password } = args;
      if (!!email && !!password) {
        return new Promise((resolve, reject) => {
          rp({
            method: 'POST',
            uri: `${config.backend.uri}/login`,
            body: { email, password },
            json: true
          })
          .catch(error => reject(error))
          .then(user => resolve(user));
        });
      }
      else {
        return null;
      }
    }
  }
}
