# API

## Database Schema
![image](https://user-images.githubusercontent.com/81676732/138034333-2196e684-e115-43bc-8f66-023a45ddc0f9.png)

https://drive.google.com/file/d/11E4R9bNSGPTi_cVkJcYnWvaWV9rs41OH/view?usp=sharing

## Users

#### POST

<details>
    <summary>
     api/auth/register
    </summary>

Body:
  | Parameter | Type | Note|
  | :-- | :-- | :-- |
  | username | string | (required) |
  | password | string | (required) |
  | role    | string |  |
 
</details>

### Login

#### POST

<details>
    <summary>
     api/auth/login
    </summary>

Body:
  | Parameter | Type | Note|
  | :-- | :-- | :-- |
  | username | string | (required) |
  | password | string | (required) |
 

Response:

  ```
    { 
        message: 'welcome, username'
        token: <AUTH_TOKEN>,
        user: user
    }
  ```

</details>

## Classes
**api/classes**

### Get All Classes

<details>
    <summary>
    GET /api/classes (no auth)
    </summary>
    
 Response:
  
```
[
    {
        "class_id": 1,
        "class_name": "Boxing For Beginners",
        "class_type": 'Boxing',
        "start_time": "08:00:00",
        "duration": 60,
        "intensity_level": "Easy",
        "class_location": "Arizona",
        "registered": 3,
        "max_size": 10,
        "instructor_id": 1
    },
    {
        "class_id": 2,
        "class_name": "Yoga for beginners",
        "class_type": "Yoga",
        "start_time": "10:30:00",
        "duration": 60,
        "intensity_level": "Easy",
        "class_location": "Arizona",
        "registered": 3,
        "max_size": 10,
        "instructor_id": 1
    },
  ]
 ```
 
</details>
    
#### POST

<details>
    <summary>
     api/classes/instructor
    </summary>

Body:
  | Parameter | Type | Note|
  | :-- | :-- | :-- |
  | class_name | string | (required) |
  | class_type | string | (required) |
  | start_time | string | (required) |
  | duration | integer | (required) |
  | intensity_level | string | (required) |
  | class_location | string | (required) |
  | registered | integer | 0 |
  | max_size | integer | 0 |
  | instructor_id | string | (required) |
 

Response:

  ```
    {
        "class_id": 1,
        "class_name": "Boxing For Beginners",
        "class_type": 'Boxing',
        "start_time": "08:00:00",
        "duration": 60,
        "intensity_level": "Easy",
        "class_location": "Arizona",
        "registered": 3,
        "max_size": 10,
        "instructor_id": 1
    }
  ```

</details>
