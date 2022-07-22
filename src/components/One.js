const [formLimit, setFormLimit] = useState([
    { limit: '' }
])

const handleFormChange5 = (event, index) => {
    let data = [...formLimit];
    data[index][event.target.name] = event.target.value;
    setFormLimit(data);
}
