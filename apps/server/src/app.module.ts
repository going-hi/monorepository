import { Module } from '@nestjs/common'
import { DatabaseModule } from '@/core/database'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from './configs/env.config'

@Module({
	imports: [ConfigModule.forRoot(EnvConfigOptions), DatabaseModule]
})
export class AppModule {}
