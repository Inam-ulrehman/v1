import React from 'react'
import { useSelector } from 'react-redux'
import FormRow from '../../components/FormRow'

const Profile = () => {
  const { profile } = useSelector((state) => state.editUser)

  // handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        {/* name Input */}
        <FormRow
          name='name'
          id={profile.name}
          type='text'
          value={profile.name}
          handleChange={handleChange}
        />
        {/* lastName Input */}
        <FormRow
          name='lastName'
          labelText='Last Name'
          id={profile.lastName}
          type='text'
          value={profile.lastName}
          handleChange={handleChange}
        />
        {/* email Input */}
        <FormRow
          name='email'
          id={profile.email}
          type='email'
          value={profile.email}
          handleChange={handleChange}
        />
        {/* name Input */}
        <FormRow
          name='location'
          id={profile.location}
          type='text'
          value={profile.location}
          handleChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Profile
