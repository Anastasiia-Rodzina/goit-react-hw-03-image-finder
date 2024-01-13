import css from './loader.module.css';
import { Blocks } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
