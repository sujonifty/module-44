import PropTypes from 'prop-types';


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    // console.log(option)
    return (
        <div >
            <div className='flex flex-col bg-slate-200 p-4 rounded-xl shadow-lg'>
                <h1>
                    <span className='text-6xl'>{price}</span>
                    <span className='text-3xl'>/Month</span>
                </h1>
                <p className='text-3xl'>{name}</p>
                <ul className='flex-grow'>
                    {
                        features.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
                <button className='btn bg-blue-400 rounded-xl p-3'>Add to cart</button>
            </div>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;