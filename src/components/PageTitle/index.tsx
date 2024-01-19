type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {title}
    </h2>
  );
};

export default PageTitle;
