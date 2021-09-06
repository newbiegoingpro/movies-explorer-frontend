import React from "react";
function More(props) {
    const [width, measureHeaderWidth] = React.useState({ width: window.innerWidth });
    React.useEffect(() => {
        window.addEventListener('resize', checkWindowsWidth)
        return () => {
            window.removeEventListener('resize', checkWindowsWidth)
        }
    }, [width]
    )
    function checkWindowsWidth() {
        measureHeaderWidth({ width: window.innerWidth })
    }
    const handleClick = () => {

    }
    return (
        <div className='more__box'>
            <button onClick={handleClick} className='more__btn'>Ещё</button>
        </div>

    )
}
export default More;