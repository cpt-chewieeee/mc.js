import Helpers from '../../utils/helpers'

import bcrypt from 'bcryptjs'

const UserMutations = {
  async createUser(parent, args, { prisma }) {
    const password = await Helpers.hashPassword(args.data.password)
    const user = await prisma.mutation.createUser({
      data: {
        ...args.data,
        password
      }
    })

    return {
      user,
      token: Helpers.generateToken(user.id)
    }
  },
  async login(parent, args, { prisma }) {
    console.log('my args', args.data)
    const user = await prisma.query.user({
      where: {
        email: args.data.email
      }
    })

    if (!user) {
      throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(args.data.password, user.password)

    if (!isMatch) {
      throw new Error('Unable to login')
    }

    return {
      user,
      token: Helpers.generateToken(user.id)
    }
  },
  async deleteUser(parent, args, { prisma, request }, info) {
    const userId = Helpers.getUserId(request)

    return prisma.mutation.deleteUser(
      {
        where: {
          id: userId
        }
      },
      info
    )
  },
  async updateUser(parent, args, { prisma, request }, info) {
    const userId = Helpers.getUserId(request)

    if (typeof args.data.password === 'string') {
      args.data.password = await Helpers.hashPassword(args.data.password)
    }

    return prisma.mutation.updateUser(
      {
        where: {
          id: userId
        },
        data: args.data
      },
      info
    )
  }
}

export default UserMutations
