import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { gql, useQuery } from '@apollo/client';

const HELLO_QUERY = gql`
    query Query($name: String) {
        hello(name: $name)
    }
  
`;

export default function Hello() {

    const { data, loading, error } = useQuery(HELLO_QUERY, {
        variables: {name: "Bell"}
    })

    if (loading) return <Text>Loading...</Text>

    if (error) {
        console.error('HELLO_QUERY error', error)
        return <Text>Error (check console logs)</Text>
    }
    return (
        <Text>
            {data.hello}
        </Text>
    )
}
