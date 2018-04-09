import {connect} from 'react-redux';
import Component from './Component';
import {changeFiat} from '../../store/actions';

const mapStateToProps = state => {
    return {
        fiat: state.fiat
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeFiat: (fiat) => dispatch(changeFiat(fiat))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);