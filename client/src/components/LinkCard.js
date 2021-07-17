import { Typography, Box } from "@material-ui/core"

const LinkCard = ({ link }) => (
    <>
        {link && (
            <Box>
                <Typography variant="body2" component="p">
                    <a href={link?.from} color="inherit" target="_blank" rel="noopeener noreferrer">{link.from}</a>
                </Typography>
                <Typography variant="body2" component="p">
                    <a href={link?.to} target="_blank" rel="noopeener noreferrer">{link.to}</a>
                </Typography>
            </Box >
        )}
    </>
)
export default LinkCard
