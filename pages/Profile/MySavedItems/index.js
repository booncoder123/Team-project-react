import withAuth from "../../../helpers/withAuth";

function MySavedItems() {
    return(
        <div>
            this is my saved items page
        </div>
    );
}

export default withAuth(MySavedItems);