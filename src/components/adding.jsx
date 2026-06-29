import { Formulaire } from './form';
import { Button } from './button';
import { useState } from 'react';
import styles from './adding.module.css';

export const AddEducation = ({
  onAdd,
  onEdit,
  onCancel,
  edit,
  initialSchool,
}) => {
  const isEditing = edit;
  const [school, setSchool] = useState(initialSchool?.school || '');
  const [degree, setDegree] = useState(initialSchool?.degree || '');
  const [startDate, setStartDate] = useState(initialSchool?.startDate || '');
  const [endDate, setEndDate] = useState(initialSchool?.endDate || '');
  const [location, setLocation] = useState(initialSchool?.location || '');
  const handleCancel = () => {
    onCancel();
  };
  const handleSave = () => {
    const newEducation = { school, degree, startDate, endDate, location };
    if (isEditing === false) {
      onAdd(newEducation);
    } else {
      onEdit(newEducation);
    }
  };
  return (
    <div className={styles.formContainer}>
      <Formulaire
        legend="School"
        placeHolder="Enter school / University"
        onChange={(e) => setSchool(e.target.value)}
        value={school}
      />
      <Formulaire
        legend="Degree"
        placeHolder="Enter degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <div className={styles.dateGroup}>
        <div>
          <Formulaire
            legend="Start date"
            placeHolder="Enter start date"
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <Formulaire
            legend="End date"
            placeHolder="Enter end date"
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <Formulaire
        legend="Location"
        placeHolder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <div className={styles.buttonGroup}>
        <Button content="Cancel" handleClick={handleCancel} />
        <Button content="Save" handleClick={handleSave} />
      </div>
    </div>
  );
};

export const AddExperience = ({
  onAdd,
  onEdit,
  onCancel,
  edit,
  initialExperience,
}) => {
  const isEditing = edit;
  const [company, setCompany] = useState(initialExperience?.company || '');
  const [position, setPosition] = useState(initialExperience?.position || '');
  const [startDate, setStartDate] = useState(
    initialExperience?.startDate || ''
  );
  const [endDate, setEndDate] = useState(initialExperience?.endDate || '');
  const [location, setLocation] = useState(initialExperience?.location || '');
  const [description, setDescription] = useState(
    initialExperience?.description || ''
  );
  const handleSave = () => {
    const newExperience = {
      company,
      position,
      startDate,
      endDate,
      location,
      description,
    };
    if (isEditing === false) {
      onAdd(newExperience);
    } else {
      onEdit(newExperience);
    }
  };
  const handleCancel = () => {
    onCancel();
  };
  return (
    <div className={styles.formContainer}>
      <Formulaire
        legend="Company name"
        placeHolder="Enter company name"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <Formulaire
        legend="Position title"
        placeHolder="Enter position title"
        onChange={(e) => setPosition(e.target.value)}
        value={position}
      />
      <div className={styles.dateGroup}>
        <div>
          <Formulaire
            legend="Start date"
            placeHolder="Enter start date"
            type="text"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
        </div>
        <div>
          <Formulaire
            legend="End date"
            placeHolder="Enter end date"
            type="text"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
          />
        </div>
      </div>
      <Formulaire
        legend="Location"
        placeHolder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <Formulaire
        legend="Description"
        placeHolder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <div className={styles.buttonGroup}>
        <Button content="Cancel" handleClick={handleCancel} />
        <Button content="Save" handleClick={handleSave} />
      </div>
    </div>
  );
};
