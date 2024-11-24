const Notification = ({message, color}) => {
    const notiStyle = {
        color: `${color}`,
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (message === null) {
        return null
    }

    return (
        <div style={notiStyle}>
            {message}
        </div>
    )
}

export default Notification