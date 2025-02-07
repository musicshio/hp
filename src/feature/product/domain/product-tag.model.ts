export class ProductTagModel {
  readonly label: string;

  private constructor(props: { label: string }) {
    this.label = props.label;
  }

  static reconstruct(props: { label: string }) {
    return new ProductTagModel(props);
  }
}
