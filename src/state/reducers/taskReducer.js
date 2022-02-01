
let initialState = [{ id: 1, isSelected: true, name: 'Call the Dentist' }, { id: 2, isSelected: true, name: 'Schedule a dinner with Peter'},
{ id: 3, isSelected: true, name: 'Dailyui 43' }, { id: 4, isSelected: true, name: 'Call the vet'},
{ id: 5, isSelected: false, name: 'Kates birthday present' }, { id: 6, isSelected: false, name: 'Zero-index'},
{ id: 7, isSelected: false, name: 'No alcohol today' }, { id: 8, isSelected: false, name: 'Check-in to flight'}];

const reducer = (state = initialState, action) => {
switch(action.type) {

    case 'Get':
    return state;

    case 'Add':
    return state.concat(action.payload);

    default:
    return state;
}

};

export default reducer;