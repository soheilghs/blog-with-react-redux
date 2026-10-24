import moment from 'moment';

function TimeAgo({date}) {
    const momentDate = moment(date);

    return (
        <span title={momentDate.toLocaleString()}>
            &nbsp;
            <i>{momentDate.fromNow()}</i>
        </span>
    );
}

export default TimeAgo;