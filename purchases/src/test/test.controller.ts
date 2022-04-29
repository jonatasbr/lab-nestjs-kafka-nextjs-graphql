import { Controller, Get, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';

@Controller('test')
export class TestController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  @UseGuards(AuthorizationGuard)
  async hello() {
    const all = this.prismaService.customer.findMany();
    return all;
  }
}
