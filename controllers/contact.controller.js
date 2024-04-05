
import Contact from '../models/contact.model.js'

const createContact=async(req,res)=>{
    try{
        const contact=await Contact.create(req.body)
        res.status(201).json({msg:'Contact created successfully',contact:contact})
    }catch(err){
        res.status(500).json({msg:'Error in creating contact',err:err})
    }
}
const getAllContact=async(req,res)=>{
    try{
        const contact=await Contact.find()
        res.status(200).json({msg:'Contact fetched successfully',contact:contact})
    }catch(err){
        res.status(500).json({msg:'Error in fetching contact',err:err})
    }
}
const getContact=async(req,res)=>{
    try{
        const id=req.params.id
        const contact=await Contact.findById(id)
        res.status(200).json({msg:'Contact fetched successfully',contact:contact})
    }catch(err){
        res.status(500).json({msg:'Error in fetching contact',err:err})
    }
}
const updateContact=async(req,res)=>{
    try{
        const id=req.params.id
        const contact=await Contact.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg:'Contact updated successfully',contact:contact})
    }catch(err){
        res.status(500).json({msg:'Error in updating contact',err:err})
    }
}
const deleteContact=async(req,res)=>{
    try{
        const id=req.params.id
        const contact=await Contact.findByIdAndDelete(id)
        res.status(200).json({msg:'Contact deleted successfully',contact:contact})
    }catch(err){
        res.status(500).json({msg:'Error in deleting contact',err:err})
    }
}
const getContactByEmailOrByPhone = async (req, res) => {
    try {
        const email = req.query.email; 
        const phone = (req.query.phone);
        console.log(phone)
        if (!email && !phone) {
            return res.status(400).json({ error: 'Email or phone parameter is missing.' });
        }
        
        const query = {};
        if (email) {
            query.email = email;
        }
        if (phone) {
            
            query.phone = phone;
        }

        const contacts = await Contact.find(query);
        
        if (contacts.length > 0) {
            console.log(contacts);
            res.status(200).json(contacts);
        } else {
            res.status(404).json({ message: 'No contacts found matching the criteria' });
        }
    } catch (error) {
        console.error('Error retrieving contacts:', error);
        res.status(500).json({ error: 'Failed to retrieve contacts. Please try again later.' });
    }
}

// const getContactByPhone=async(req,res)=>{
//     try{
//         const phone=req.query.phone
//         if(!phone){
//             res.status(404).json({msg:'contact not found'})
//         }
//         const query={phone}
//         const contact=await Contact.find(query);
//         res.status(200).json({msg:'Contact fetched successfully',contact:contact})
//     }catch(err){
//         res.status(500).json({msg:'Error in fetching contact',err:err})
//     }
// }

const contactController={
    createContact,
    getAllContact,
    getContact,
    updateContact,
    deleteContact,
    getContactByEmailOrByPhone,
    // getContactByPhone
}

export default contactController
