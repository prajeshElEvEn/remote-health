API document-
<h2>register/login</h2>
1)register-https://remoteheealth.herokuapp.com/api/users/register
require username,email,password.
2)login-https://remoteheealth.herokuapp.com/api/users/login
require username,password.


<h2>blog</h2>
3)blog post -https://remoteheealth.herokuapp.com/api/blogs/
require-title,description,username,categories.

4)blog update-https://remoteheealth.herokuapp.com/api/blog/:id

5)blog delete-https://remoteheealth.herokuapp.com/api/blogs/:id

6)blog get https://remoteheealth.herokuapp.com/api/blogs/:id

7) get all post -https://remoteheealth.herokuapp.com/api/blogs/

<h2>NGO</h2>

8)ngo save -https://remoteheealth.herokuapp.com/api/ngo/save

require-name,area,contact,imageURL.

9)update ngo details - https://remoteheealth.herokuapp.com/api/ngo/update/:id
changable-name,contact,imageURL.

10)delete ngo -https://remoteheealth.herokuapp.com/api/ngo/delete/:id.

11)get ngo:https://remoteheealth.herokuapp.com/api/ngo/getOne/:id.

12) get all ngo - https://remoteheealth.herokuapp.com/api/ngo/getAll 




<h2>podcast</h2>
13) new podcast - https://remoteheealth.herokuapp.com/api/podcast/save.
require -name,imageURL,podcastUrl,NGO,artist,language,category.

14)update ngo -https://remoteheealth.herokuapp.com/api/podcast/update/:id
updatebles-name,imageURL,podcastUrl,NGO,artist,language,category.

15)delete podcast -https://remoteheealth.herokuapp.com/api/podcast/delete/:id

16) get favourites podcast -https://remoteheealth.herokuapp.com/api/podcast/getFavouritespods

17)get all -https://remoteheealth.herokuapp.com/api/podcast/getAll

18)getone -https://remoteheealth.herokuapp.com/api/podcast/getOne/:id

<h2>artist</h2>
19)post new artist- https://remoteheealth.herokuapp.com/api/artists/save
require- name,imageURL,twiiter,instagram

20)update https://remoteheealth.herokuapp.com/api/artists/update/:id
updateable-name,imageURL,twitter,instagram

21) delete https://remoteheealth.herokuapp.com/api/artists/delete/:id

22)getone https://remoteheealth.herokuapp.com/api/artists/getOne/:id

23)get all https://remoteheealth.herokuapp.com/api/artists/getALL

