import Page from "./Page";

const ListPages = ({ pages }) => {
  return <>{pages && pages.map((page) => <Page key={page.id} {...page} />)}</>;
};

export default ListPages;
