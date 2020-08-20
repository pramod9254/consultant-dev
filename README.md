## Consultant Dev

## Pre requisites
1. GIT
2. Node version 10 and above
3. Redis

#### Server Setup (dev) 
npm install   
npm run dev

### Server Setup (prod) 
npm install   
npm run prod
npm start

### Test
npm run test


### redis setup:

REDIS_HOST="//localhost"

REDIS_PORT=6379

REDIS_SESSION_TIMEOUT=604800  // 7 days

REDIS_RETRY:5000

REDIS_KEY_PREFIX="dev."


### endpoint:
http://localhost:8000/api/v1/tv/97186/episodes

### Output sample:
```
{
    "status": true,
    "data": [
        {
            "air_date": "2020-06-17",
            "episode_number": 1,
            "id": 2036536,
            "name": "Welcome to Creekwood",
            "overview": "Victor arrives at Creekwood a year after the events of “Love, Simon” excited to start his new life.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/yRIAhAIvt2HgtTBocsRrKdcgpNL.jpg",
            "vote_average": 9.593,
            "vote_count": 273,
            "crew": [
                {
                    "id": 1300294,
                    "credit_id": "5ee1206c2dda890022765456",
                    "name": "Isaac Aptaker",
                    "department": "Writing",
                    "job": "Writer",
                    "gender": 2,
                    "profile_path": "/axSxcMKKJ4QwrPR1uPnw1MV1tb6.jpg"
                },
                {
                    "id": 1300295,
                    "credit_id": "5ee120764c1bb00020a2f208",
                    "name": "Elizabeth Berger",
                    "department": "Writing",
                    "job": "Writer",
                    "gender": 1,
                    "profile_path": "/smsmNSVUoWwy7fxR9TxEOZ5B279.jpg"
                },
                {
                    "id": 2028939,
                    "credit_id": "5ee1207ff031740022dddda1",
                    "name": "Amy York Rubin",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 1,
                    "profile_path": "/7P6MGiVhszMUf7Zzoztk5i3NFF8.jpg"
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 2,
            "id": 2268799,
            "name": "Stoplight Party",
            "overview": "After news of his Ferris wheel ride with Mia, Victor has an unexpected brush with popularity.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/gaWlGcpRDVWT2Ih8FtH6qR90AuR.jpg",
            "vote_average": 9.571,
            "vote_count": 56,
            "crew": [
                {
                    "id": 1878983,
                    "credit_id": "5ee120acc8113d00217a3af9",
                    "name": "Brian Tanen",
                    "department": "Writing",
                    "job": "Writer",
                    "gender": 0,
                    "profile_path": null
                },
                {
                    "id": 63513,
                    "credit_id": "5ee120b6f03174001fdd77e6",
                    "name": "Jason Ensler",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 2,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 3,
            "id": 2268800,
            "name": "Battle of the Bands",
            "overview": "Determined to figure out his feelings, Victor asks Mia out on their first real date.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/7J3OTbxL3aeZPMDRGAoTbqVNmL1.jpg",
            "vote_average": 9.571,
            "vote_count": 42,
            "crew": [
                {
                    "id": 1380814,
                    "credit_id": "5ee120c9dbf144001f90ea30",
                    "name": "Jen Braeden",
                    "department": "Writing",
                    "job": "Writer",
                    "gender": 0,
                    "profile_path": null
                },
                {
                    "id": 2674076,
                    "credit_id": "5ee120edf031740022ddddfd",
                    "name": "Pilar Boehm",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 0,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 10,
            "id": 2268807,
            "name": "Spring Fling",
            "overview": "Determined to give Mia one last perfect night, Victor takes her to the Spring Fling.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/3weXwPNHoKhCKr5dzTCpBA7VuVv.jpg",
            "vote_average": 9.585,
            "vote_count": 41,
            "crew": [
                {
                    "id": 63513,
                    "credit_id": "5ee120b6f03174001fdd77e6",
                    "name": "Jason Ensler",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 2,
                    "profile_path": null
                },
                {
                    "id": 1300294,
                    "credit_id": "5eef18dfb0cd200036b754ce",
                    "name": "Isaac Aptaker",
                    "department": "Writing",
                    "job": "Story",
                    "gender": 2,
                    "profile_path": "/axSxcMKKJ4QwrPR1uPnw1MV1tb6.jpg"
                },
                {
                    "id": 1300295,
                    "credit_id": "5eef18f06f6a990038cd4596",
                    "name": "Elizabeth Berger",
                    "department": "Writing",
                    "job": "Story",
                    "gender": 1,
                    "profile_path": "/smsmNSVUoWwy7fxR9TxEOZ5B279.jpg"
                },
                {
                    "id": 2686034,
                    "credit_id": "5eef1a3dd2b2090034001bea",
                    "name": "Jillian Moreno",
                    "department": "Writing",
                    "job": "Screenplay",
                    "gender": 0,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 4,
            "id": 2268801,
            "name": "The Truth Hurts",
            "overview": "Victor and Pilar get to the bottom of what happened between Roger and their Mom back in Texas.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/zOhHyuUFQeI3tapkw97T8988lji.jpg",
            "vote_average": 9.8,
            "vote_count": 35,
            "crew": [
                {
                    "id": 2432981,
                    "credit_id": "5ee121282dda89001f768007",
                    "name": "Marcos Luevanos",
                    "department": "Writing",
                    "job": "Writer",
                    "gender": 0,
                    "profile_path": null
                },
                {
                    "id": 132863,
                    "credit_id": "5ee1213890dde00020a7e12c",
                    "name": "Michael Lennox",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 2,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 5,
            "id": 2268802,
            "name": "Sweet Sixteen",
            "overview": "With tensions high at home, Victor lets his family throw him a Birthday party.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/6jTPdfiNmPGnkqwXXDktuvhS2kW.jpg",
            "vote_average": 9.765,
            "vote_count": 34,
            "crew": [
                {
                    "id": 131640,
                    "credit_id": "5ee123e2f36a32001f900520",
                    "name": "Sheila R. Lawrence",
                    "department": "Writing",
                    "job": "Writer",
                    "gender": 1,
                    "profile_path": null
                },
                {
                    "id": 29214,
                    "credit_id": "5ee123ee2dda890022766140",
                    "name": "Anne Fletcher",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 1,
                    "profile_path": "/yAhFS3NZjQU8zExfJQ3SXEYGMfP.jpg"
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 6,
            "id": 2268803,
            "name": "Creekwood Nights",
            "overview": "Victor is nervous when Mia says she wants to take their relationship to the next level.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/ybXfahKdM0oOXAcEjMmveZ7lYng.jpg",
            "vote_average": 9.788,
            "vote_count": 33,
            "crew": [
                {
                    "id": 1444937,
                    "credit_id": "5ee1245e2dda89001f7687ed",
                    "name": "David Smithyman",
                    "department": "Writing",
                    "job": "Writer",
                    "gender": 0,
                    "profile_path": null
                },
                {
                    "id": 1555382,
                    "credit_id": "5ee1246d90dde00020a7e47e",
                    "name": "Anu Valia",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 1,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 9,
            "id": 2268806,
            "name": "Who the Hell Is B?",
            "overview": "Back in Atlanta, Victor starts to open up to his friends about what he's been feeling.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/7I5SeNdwR2zftyyQ1P3I4ek4AF4.jpg",
            "vote_average": 9.576,
            "vote_count": 33,
            "crew": [
                {
                    "id": 1320713,
                    "credit_id": "5eef1883c86b3a00364655e2",
                    "name": "Rebecca Asher",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 0,
                    "profile_path": null
                },
                {
                    "id": 2686031,
                    "credit_id": "5eef18abd2b2090036ffb049",
                    "name": "Jeremy Roth",
                    "department": "Writing",
                    "job": "Screenplay",
                    "gender": 0,
                    "profile_path": null
                },
                {
                    "id": 1527949,
                    "credit_id": "5eef18b7c86b3a003445b438",
                    "name": "Jess Pineda",
                    "department": "Writing",
                    "job": "Screenplay",
                    "gender": 0,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 7,
            "id": 2268804,
            "name": "What Happens in Willacoochee...",
            "overview": "Victor and Benji go on an unexpected road trip out of town.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/p1zYahCAiK3O9f8qY9yk9QkyF5W.jpg",
            "vote_average": 9.875,
            "vote_count": 32,
            "crew": [
                {
                    "id": 84074,
                    "credit_id": "5eef17ecb0cd200034b6ed65",
                    "name": "Jay Karas",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 2,
                    "profile_path": null
                },
                {
                    "id": 1642806,
                    "credit_id": "5eef180dc86b3a003745e521",
                    "name": "Danny Fernandez",
                    "department": "Writing",
                    "job": "Screenplay",
                    "gender": 0,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        },
        {
            "air_date": "2020-06-17",
            "episode_number": 8,
            "id": 2268805,
            "name": "Boys' Trip",
            "overview": "Victor goes to visit Simon and see what it looks like to be out in New York.",
            "production_code": "",
            "season_number": 1,
            "show_id": 97186,
            "still_path": "/vPU21eBV1HtQ6QIWPhEUOtX1yW7.jpg",
            "vote_average": 9.839,
            "vote_count": 31,
            "crew": [
                {
                    "id": 1213162,
                    "credit_id": "5eef1852c86b3a003445b3af",
                    "name": "Todd Holland",
                    "department": "Directing",
                    "job": "Director",
                    "gender": 2,
                    "profile_path": null
                },
                {
                    "id": 1878983,
                    "credit_id": "5eef1864c86b3a003646558a",
                    "name": "Brian Tanen",
                    "department": "Writing",
                    "job": "Screenplay",
                    "gender": 0,
                    "profile_path": null
                }
            ],
            "guest_stars": []
        }
    ]
}
```