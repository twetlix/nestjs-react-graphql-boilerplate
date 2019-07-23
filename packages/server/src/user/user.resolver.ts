import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  getHello() {
    return 'Hello World From Nestjs/GraphQL'
  }

  @Query(() => [UserEntity])
  findAllUsers() {
    return this.userService.findAll()
  }

  @Mutation(() => UserEntity)
  createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.userService.createOne({ name, email, password })
  }
}
