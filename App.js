/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [kingPawnOpening, setKingPawnOpening] = useState(false);
  const [queenPawnOpening, setQueenPawnOpening] = useState(false);
  const [retiOpening, setRetiOpening] = useState(false);
  const [englishOpening, setenglishOpening] = useState(false);
  const [fianchettOpening, setFianchettOpening] = useState(false);

  const blackPieces = [
    {
      0: require('./images/black_rook.png'),
      1: require('./images/black_knight.png'),
      2: require('./images/black_bishop.png'),
      3: require('./images/black_queen.png'),
      4: require('./images/black_king.png'),
      5: require('./images/black_bishop.png'),
      6: require('./images/black_knight.png'),
      7: require('./images/black_rook.png'),
    },
  ];

  const whitePieces = [
    {
      0: require('./images/white_rook.png'),
      1: require('./images/white_knight.png'),
      2: require('./images/white_bishop.png'),
      3: require('./images/white_queen.png'),
      4: require('./images/white_king.png'),
      5: require('./images/white_bishop.png'),
      6: require('./images/white_knight.png'),
      7: require('./images/white_rook.png'),
    },
  ];
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const pieceClicked = (idx, index) => {
    console.log('clicked', idx, index);
    if (idx == 6) {
      setKingPawnOpening(index == 4);
      console.log('kingPawnOpening', kingPawnOpening);
      queenPawnOpening = index == 3;
    }
    if (idx == 0) {
      retiOpening = index === 6;
    }
  };
  const randomClicked = () => {
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    // let randomNumber = 5;
    clearClicked();

    switch (randomNumber) {
      case 1:
        setKingPawnOpening(true);
        break;
      case 2:
        setQueenPawnOpening(true);
        break;
      case 3:
        setRetiOpening(true);
        break;
      case 4:
        setenglishOpening(true);
        break;
      case 5:
        setFianchettOpening(true);
        break;
    }
  };
  const clearClicked = () => {
    setKingPawnOpening(false);
    setQueenPawnOpening(false);
    setRetiOpening(false);
    setenglishOpening(false);
    setFianchettOpening(false);
  };
  const wordArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const countArray = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <View style={styles.container}>
      <View style={styles.mainBlock}>
        <View style={styles.firstRow}>
          {wordArray.map((data, idx) => {
            return (
              <View
                style={[
                  styles.titleBlock,
                  {borderBottomWidth: 3, borderColor: 'white'},
                ]}>
                <Text style={styles.character}>{data}</Text>
              </View>
            );
          })}
        </View>
        {wordArray.map((data, idx) => {
          return (
            <View style={styles.row}>
              {countArray.map((count, index) => {
                let evenRow = idx % 2 == 0;
                let evenColumn = index % 2 == 0;
                let showBlackPawn = idx == 1;
                let showWhitePawn = idx == 6;

                let newKingPawnMove = kingPawnOpening && index == 4 && idx == 4;
                let newRetiMove = retiOpening && index == 5 && idx == 5;
                let newEnglishMove = englishOpening && index == 2 && idx == 4;
                let newFianchettMove =
                  fianchettOpening && index == 6 && idx == 4;

                let newQueenPawnMove =
                  queenPawnOpening && index == 3 && idx == 4;
                return (
                  <>
                    {index == 0 && (
                      <View
                        style={[
                          styles.titleBlock1,
                          {borderRightWidth: 3, borderColor: 'white'},
                        ]}>
                        <Text style={styles.character}>{count - idx}</Text>
                      </View>
                    )}
                    <TouchableOpacity
                      onPress={() => pieceClicked(idx, index)}
                      style={[
                        styles.centerContent,
                        evenRow
                          ? evenColumn
                            ? styles.whiteBlock
                            : styles.blackBlock
                          : evenColumn
                          ? styles.blackBlock
                          : styles.whiteBlock,
                        (newKingPawnMove ||
                          newRetiMove ||
                          newQueenPawnMove ||
                          newEnglishMove ||
                          newFianchettMove) && {
                          backgroundColor: '#b9cb41',
                        },
                      ]}>
                      {idx == 0 &&
                        blackPieces.map(p => {
                          return (
                            <Image style={styles.pieces} source={p[index]} />
                          );
                        })}
                      {idx == 7 &&
                        whitePieces.map(p => {
                          if (retiOpening && index == 6) {
                            return <Image style={styles.pieces} source={''} />;
                          }
                          return (
                            <Image style={styles.pieces} source={p[index]} />
                          );
                        })}
                      {newKingPawnMove && (
                        <Image
                          style={styles.pieces}
                          source={require('./images/white_pawn.png')}
                        />
                      )}
                      {newQueenPawnMove && (
                        <Image
                          style={styles.pieces}
                          source={require('./images/white_pawn.png')}
                        />
                      )}
                      {newRetiMove && (
                        <Image
                          style={styles.pieces}
                          source={require('./images/white_knight.png')}
                        />
                      )}
                      {newEnglishMove && (
                        <Image
                          style={styles.pieces}
                          source={require('./images/white_pawn.png')}
                        />
                      )}
                      {newFianchettMove && (
                        <Image
                          style={styles.pieces}
                          source={require('./images/white_pawn.png')}
                        />
                      )}
                      {(showBlackPawn || showWhitePawn) && (
                        <Image
                          style={styles.pieces}
                          source={
                            showBlackPawn
                              ? require('./images/black_pawn.png')
                              : showWhitePawn
                              ? kingPawnOpening && index == 4
                                ? ''
                                : queenPawnOpening && index == 3
                                ? ''
                                : englishOpening && index == 2
                                ? ''
                                : fianchettOpening && index == 6
                                ? ''
                                : require('./images/white_pawn.png')
                              : ''
                          }
                        />
                      )}
                    </TouchableOpacity>
                    {index == 7 && (
                      <View
                        style={[
                          styles.titleBlock1,
                          {borderLeftWidth: 3, borderColor: 'white'},
                        ]}>
                        <Text style={styles.character}>{index - idx + 1}</Text>
                      </View>
                    )}
                  </>
                );
              })}
            </View>
          );
        })}
        <View style={styles.firstRow}>
          {wordArray.map((data, idx) => {
            return (
              <View
                style={[
                  styles.titleBlock,
                  {borderTopWidth: 3, borderColor: 'white'},
                ]}>
                <Text style={styles.character}>{data}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity onPress={randomClicked} style={styles.button}>
        <Text style={styles.buttonText}>Random</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearClicked} style={styles.button}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
