import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { useAddBeer } from '@/hooks'
import { isValidUrl } from '../../utils/validation'
import { FormInput } from '../../components/FormInput'
import { RatingInput } from '../../components/RatingInput'
import { SnackbarState } from '@/types'
import beerIcon from '../../assets/beerIcon.jpg'

import styles from './AddItem.module.css'

/**
 * AddItem component for adding a new beer to the collection
 *
 * @returns React Element
 */
export function AddItem() {
  const navigate = useNavigate()
  const { addNewBeer } = useAddBeer()

  // Form state for input fields
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    rating: 0,
    reviews: 1,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success',
  })

  // Handles input changes for name, image and price fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handles changes for the rating input field
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: parseInt(value) }))
  }

  // Validates the form inputs and returns any errors
  const validateForm = (): Record<string, string> => {
    const newErrors: Record<string, string> = {}
    if (!formData.name) newErrors.name = 'Name is required.'
    if (!formData.price) {
      newErrors.price = 'Price is required.'
    } else if (
      isNaN(Number(formData.price)) ||
      parseFloat(formData.price) <= 0
    ) {
      newErrors.price = 'Price must be a positive number.'
    }
    if (formData.image && !isValidUrl(formData.image)) {
      newErrors.image = 'Invalid image URL.'
    }
    return newErrors
  }

  // Handles form submission to add a new beer
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSnackbar({
        open: true,
        message: 'Please fix the errors.',
        severity: 'error',
      })
      return
    }

    // Create a new beer object
    const newBeer = {
      id: Date.now().toString(),
      image: formData.image || beerIcon,
      name: formData.name,
      price: `$${parseFloat(formData.price).toFixed(2)}`,
      rating: {
        average: formData.rating,
        reviews: formData.reviews,
      },
    }

    addNewBeer(newBeer)

    setSnackbar({
      open: true,
      message: 'Beer added successfully!',
      severity: 'success',
    })

    // Navigate back to the main page after a short delay
    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Add New Beer</h1>
        <div className={styles.input}>
          <FormInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={!!errors.name}
            helperText={errors.name}
          />
        </div>
        <div className={styles.input}>
          <FormInput
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            error={!!errors.image}
            helperText={errors.image}
          />
        </div>
        <div className={styles.input}>
          <FormInput
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            error={!!errors.price}
            helperText={errors.price}
          />
        </div>
        <div className={styles.input}>
          <RatingInput value={formData.rating} onChange={handleRatingChange} />
        </div>
        <button type="submit" className={styles.button}>
          Save
        </button>
        {snackbar.open && (
          <div
            className={`${styles.toast} ${
              snackbar.severity === 'success' ? styles.success : styles.error
            }`}
          >
            {snackbar.message}
          </div>
        )}
      </form>
    </div>
  )
}
