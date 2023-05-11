import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HeathCheckDto } from './shared/dto/heath-check.dto';
import { ApiOperationDescription } from './constants/enums';
import { Public } from './app/auth/decorators/public.decorator';

@ApiTags('main')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ description: ApiOperationDescription.MAIN_STATUS })
  @ApiResponse({ type: HeathCheckDto })
  @Public()
  @Get('status')
  healthCheck(): HeathCheckDto {
    return this.appService.healthCheck();
  }
}
