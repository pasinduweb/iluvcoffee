import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This returns coffee id: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
