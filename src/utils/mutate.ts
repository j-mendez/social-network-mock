import { ENUM_SPLIT } from "@app/config";

const mutateObjectFromArray = (
  source: string[] = [],
  obj: Object = {},
  value: any = {},
  isEnum: boolean = true
) => {
  (isEnum ? source.splice(0, source.length / ENUM_SPLIT) : source).forEach(
    (item) => {
      obj[item] = value;
    }
  );
};

export { mutateObjectFromArray };
