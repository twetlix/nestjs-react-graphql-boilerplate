import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from './common/config/config.module'
import { ConfigService } from './common/config/config.service'
import { UserEntity } from './user/user.entity'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DB_URL'),
        synchronize: true,
        logging: process.env.NODE_ENV === 'development' ? true : false,
        dropSchema: process.env.NODE_ENV === 'test' ? true : false,
        entities: [UserEntity],
        migrations: [],
        subscribers: [],
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      playground: true,
      debug: process.env.NODE_ENV === 'development' ? true : false,
      context: ({ req }) => ({ req }),
    }),
    UserModule,
  ],
})
export class AppModule {}
