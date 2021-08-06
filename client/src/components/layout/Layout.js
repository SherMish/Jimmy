import MainNavigation from './MainNavigation'

import classes from './Layout.module.css'

function Layout(props) {
    return (
        // <div className="bg-light">
        <div className="bg-light">
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout;