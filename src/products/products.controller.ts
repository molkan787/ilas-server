import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController{

    constructor(private productsService: ProductsService) { }

    @Get('all')
    getProduct(): Promise<Product[]>{
        return this.productsService.getAllProducts();
    }

    @Get('foo')
    getFoo(): string{
        return 'Foo product!'
    }

}