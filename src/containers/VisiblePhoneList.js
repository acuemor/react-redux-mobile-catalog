import { connect } from 'react-redux'
import { loadData } from '../actions'
import PhoneList from '../components/PhoneListComponent'

const getVisiblePhoneList = (phones, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return phones;
        case 'SHOW_IN_STOCK':
            return phones.filter(phone => phone.inStock);
        case 'SHOW_SOLD_OUT':
            return phones.filter(phone => !phone.inStock);
        default:
            return phones;
    }
}

const mapStateToProps = (state) => {
    return {
        phoneList: getVisiblePhoneList(state.phones.phoneList, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPhoneListClick: (id) => {
            console.log('click on phone: ---->', id);
            // dispatch()
        },
        getPhoneList: () => {
            dispatch(loadData())
        }
    }
}

const VisiblePhoneList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList)

export default VisiblePhoneList