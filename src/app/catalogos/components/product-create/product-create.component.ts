import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.createProduct(this.product).subscribe(response => {
      alert('Product created successfully!');
      this.product = { name: '', description: '', price: 0, stock: 0 }; // Reset form
    });
  }
}
