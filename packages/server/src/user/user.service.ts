import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findAll() {
    return this.userRepository.find()
  }

  async createOne(data: any) {
    const user = await this.userRepository.create(data)
    await this.userRepository.save(user)
    return this.userRepository.findOne({ where: { email: data.email } })
  }
}
