export class ProductTypeModel {
  static readonly YOUTUBE = new ProductTypeModel("YOUTUBE");
  static readonly EXTERNAL = new ProductTypeModel("EXTERNAL");

  private constructor(private readonly _value: string) {}
}
