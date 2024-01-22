type Props = {
  text: string;
};

const Paragraph = ({ text }: Props) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
};

export default Paragraph;
