import Tippy from '@tippyjs/react'

const ToolTip = ({ message, element, placement="top"}: any) => {
    return (
        <Tippy
            content={message}
            allowHTML={true}
            animation="scale"
            inertia={true}
            interactiveBorder={30}
            placement={placement}
            maxWidth={200}
            theme="material"
        >
            {element}
        </Tippy>
    );
}
 
export default ToolTip;