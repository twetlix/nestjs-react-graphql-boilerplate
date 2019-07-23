import { NestApplication } from '@nestjs/core'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', (): void => {
  let app: NestApplication

  beforeEach(
    async (): Promise<void> => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile()

      app = moduleFixture.createNestApplication()
      await app.init()
    },
  )

  it('/ (GET)', (): Test => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!')
  })
})
