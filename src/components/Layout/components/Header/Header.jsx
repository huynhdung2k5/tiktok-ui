import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

const handleChange = () => {};

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div className={cx('searchContainer')}>
                    <input
                        spellCheck={false}
                        placeholder="Search account and videos..."
                        className={cx('searchInput')}
                        type="search"
                        id="search-input"
                    />
                    <div className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faSpinner} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
