import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as helmet from 'helmet'
import { AppModule } from './app.module'
import { ConfigService } from './common/config/config.service'

class App {
  constructor(private readonly configService: ConfigService) {
    this.run()
  }

  async run(): Promise<void> {
    const port = this.configService.get('PORT') || 3000
    const app = await NestFactory.create(AppModule)
    app.use(helmet())
    app.useGlobalPipes(
      new ValidationPipe({
        skipMissingProperties: true,
      }),
    )
    await app.listen(port)
    Logger.log(`Server started on http://localhost:${port}/graphql`, 'Server')
  }
}

new App(new ConfigService(`.env.${process.env.NODE_ENV}`))
