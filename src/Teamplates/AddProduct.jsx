const AddProduct = () => {
    return (
        <div className="">
            <div className="admin_add_product">
                <input className="inp_category" type="text" />
                <input className="inp_name" type="text" name="name" id="" />
                <input className="inp_count" type="text" name="count" id="" />
                <div className="">
                <label className="lbl_file" for="img_upload">add image</label>    
                <input className="inp_file" type="file" name="img_upload" id="img_upload"/>
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="submit" />
            </div>
            <form action="">
                <input type="text" name="category" id="" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default AddProduct;