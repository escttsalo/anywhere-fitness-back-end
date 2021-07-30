# API

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
        token: <AUTH_TOKEN> 
    }
  ```

</details>

##Classes
**api/classes**

###Get All Classes

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