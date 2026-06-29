import { AddEducation, AddExperience } from './adding';
import { Button } from './button';
import { Formulaire } from './form';
import { List, ListExp } from './list';
import { Title } from './title';
import { useState } from 'react';
import styles from './card.module.css';

export const Personal = ({ setData, data }) => {
  const [name, setName] = useState(data?.personal?.name || '');
  const [firstName, setFirstName] = useState(data?.personal?.firstName || '');
  const [adress, setAdress] = useState(data?.personal?.adress || '');
  const [email, setEmail] = useState(data?.personal?.email || '');
  const [phone, setPhone] = useState(data?.personal?.phone || '');

  const handleSave = () => {
    setData({
      ...data,
      personal: { name, firstName, adress, email, phone },
    });
  };

  return (
    <div className={styles.card}>
      <Title text="Personal Details" />
      <div className={styles.formContainer}>
        <Formulaire
          legend="Name"
          placeHolder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Formulaire
          legend="First name"
          placeHolder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Formulaire
          legend="Adress"
          placeHolder="Enter your adress"
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <Formulaire
          legend="E-mail"
          placeHolder="Enter your email"
          type="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Formulaire
          legend="Phone number"
          placeHolder="Enter your phone number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button content="Save" handleClick={handleSave} />
      </div>
    </div>
  );
};

export const Educations = ({ setData, data }) => {
  const [showForm, setShowForm] = useState(false);
  const [educations, setEducations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleAddEducation = (newEducation) => {
    const updated = [...educations, newEducation];
    setEducations(updated);
    setData({
      ...data,
      educations: updated,
    });
    setShowForm(false);
  };

  const handleEditEducation = (index) => {
    setEditIndex(index);
    setEdit(true);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSaveEdit = (updatedEducation) => {
    const newEducation = educations.map((edu, i) =>
      i === editIndex ? updatedEducation : edu
    );
    setEducations(newEducation);
    setData({
      ...data,
      educations: newEducation,
    });
    setShowForm(false);
    setEditIndex(null);
  };

  const handleDeleteEducation = (index) => {
    const newEducation = educations.filter((_, i) => i !== index);
    setEducations(newEducation);
    setData({
      ...data,
      educations: newEducation,
    });
  };
  return (
    <div className={styles.card}>
      <Title text="Education" />
      {!showForm && (
        <List
          items={educations}
          onEdit={handleEditEducation}
          onDelete={handleDeleteEducation}
        />
      )}
      {showForm && (
        <AddEducation
          onCancel={handleCancel}
          onAdd={handleAddEducation}
          onEdit={handleSaveEdit}
          initialSchool={educations[editIndex]}
          edit={edit}
        />
      )}
      <Button
        handleClick={() => {
          setShowForm(true);
          setEdit(false);
          setEditIndex(null);
        }}
        content="+ Education"
      />
    </div>
  );
};

export const Experiences = ({ setData, data }) => {
  const [showForm, setShowForm] = useState(false);
  const [experience, setExperience] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [edit, setEdit] = useState(false);
  const handleAddExperience = (newExperience) => {
    const updated = [...experience, newExperience];
    setExperience(updated);
    setData({
      ...data,
      experience: updated,
    });
    setShowForm(false);
  };
  const handleEditExperience = (index) => {
    setEditIndex(index);
    setEdit(true);
    setShowForm(true);
  };
  const handleCancel = () => {
    setShowForm(false);
  };
  const handleSaveEdit = (updatedExperience) => {
    const newExperience = experience.map((exp, i) =>
      i === editIndex ? updatedExperience : exp
    );
    setExperience(newExperience);
    setData({
      ...data,
      experience: newExperience,
    });
    setShowForm(false);
    setEditIndex(null);
  };
  const handleDeleteExperience = (index) => {
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
    setData({
      ...data,
      experience: newExperience,
    });
  };
  return (
    <div className={styles.card}>
      <Title text="Experiences" />
      {!showForm && (
        <ListExp
          items={experience}
          onEdit={handleEditExperience}
          onDelete={handleDeleteExperience}
        />
      )}
      {showForm && (
        <AddExperience
          onCancel={handleCancel}
          onAdd={handleAddExperience}
          onEdit={handleSaveEdit}
          initialExperience={experience[editIndex]}
          edit={edit}
        />
      )}

      <Button
        handleClick={() => {
          setShowForm(true);
          setEdit(false);
          setEditIndex(null);
        }}
        content="+ Experience"
      />
    </div>
  );
};
