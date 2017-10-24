import {
  GraphQLString as StringType,
} from 'graphql';
import UserType from '../types/UserType';
import User from '../models/User';

async function insertUser({name, password}) {
  await User.sync({force: true});
  await User.create({
    name: name,
    password: password,
  });
}

const addUser = {
  type: UserType,
  args: {
    name: {type: StringType},
    password: {type: StringType},
  },
  resolve(args, context, info) {
    console.log('~~~~~~~~~~~~~~~~~~')
    console.log(context)
    insertUser(context).catch(err => console.log(err));
  },
};

export default addUser;
