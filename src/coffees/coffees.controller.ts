import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly CoffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.CoffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CoffeeService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.CoffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.CoffeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CoffeeService.remove(id);
  }
}
