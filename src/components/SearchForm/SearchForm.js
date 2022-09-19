import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import searchButton from '../../images/search-button.svg';
import { useState } from 'react';

function SearchForm() {
    const [formValues, setFormValues] = useState({ searchData: '' });

    const handleChangeInput = (e) => {
      const {name, value} = e.target;
      setFormValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleChangeSwitcher = () => {

    }

    return (
        <div className="search-form-container">
            <form className='search-form'>
                <div className="search-form__input-part">
                    <img className="search-form__search-icon" src={searchIcon} alt="Иконка: поиск" />
                    <input
                        id="search-form-data-input"
                        className="search-form__input"
                        type="text"
                        name="search-data"
                        placeholder="Фильм"
                        minLength="0"
                        maxLength="1000"
                        value={""}
                        onChange={handleChangeInput}
                    />
                    {/* <span className="search-form__error"></span> */}
                    <button className="search-form__button" type="submit">
                        <img className="search-form__button-icon" src={searchButton} alt="Кнопка: поиск" />
                    </button>
                </div>
                <div className="search-form__switcher-part">
                    <label className="search-form__checkbox-container">
                        <input 
                            className="search-form__checkbox" 
                            type="checkbox" 
                            name="short-movies-switcher" 
                            id="search-form-checkbox-input" 
                            value={false}
                            onChange={handleChangeSwitcher}
                        />
                        <span className="search-form__slider"></span>
                    </label>
                    <label className="search-form__slider-label" htmlFor="search-form-checkbox-input">Короткометражки</label>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;