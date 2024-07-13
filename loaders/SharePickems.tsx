interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export interface Returns {
  name: string;
}

export default function sharePickems({ name = "Capy" }: Props): Returns {
  console.log("INVOKEDDDDDD");
  return {
    name,
  };
}
