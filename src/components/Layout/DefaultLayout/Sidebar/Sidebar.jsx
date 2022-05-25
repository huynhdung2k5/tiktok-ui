import classNames from 'classnames/bind';

import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);

const SideBar = () => {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
};

export default SideBar;
