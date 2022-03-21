fs = require('fs');
path = require('path');


(function () {
    let memory = [0];
    let pointer = 0;
    let stdout = "";

    const forward = (count) => {
        pointer += count;
        if (!memory[pointer]) memory[pointer] = 0;
    }

    const backward = (count) => {
        pointer -= count;
        if (!memory[pointer]) memory[pointer] = 0;
    }

    const plus = (count) => {
        memory[pointer] += count;
    }

    const minus = (count) => {
        memory[pointer] -= count;
    }

    const write = () => {
        stdout += String.fromCharCode(memory[pointer]);
    }

    function read(count) {
        console.log("read")
    }

	
	plus(6);

	while(memory[pointer]) {
		forward(1);
		plus(8);
		backward(1);
		minus(1);
	}

	forward(1);
	plus(1);
	write();
	minus(3);
	write();
	forward(3);
	plus(1);
	forward(2);
	plus(1);
	forward(1);
	plus(2);
	forward(1);
	plus(1);
	forward(1);
	plus(1);
	forward(1);
	plus(1);
	forward(2);
	plus(1);
	forward(1);
	plus(3);
	forward(1);
	plus(1);
	forward(2);
	plus(1);
	forward(1);
	plus(1);
	forward(1);
	plus(1);
	forward(2);
	plus(1);
	forward(4);
	plus(1);
	forward(4);
	plus(1);
	forward(1);
	plus(2);
	forward(4);
	plus(1);
	forward(1);
	plus(1);
	backward(1);
	forward(1);
	minus(5);

	while(memory[pointer]) {
		plus(5);
		backward(1);

		while(memory[pointer]) {
			forward(3);
		}

		backward(3);

		while(memory[pointer]) {
			forward(9);
			plus(1);
			backward(8);

			while(memory[pointer]) {
				forward(9);
				plus(1);
				backward(9);
				minus(1);
			}

			backward(1);
			minus(1);
			backward(3);
		}

		forward(6);
		plus(1);
		forward(3);
		plus(1);

		while(memory[pointer]) {
			backward(3);
		}

		backward(5);

		while(memory[pointer]) {
			forward(3);
			plus(1);
			backward(2);

			while(memory[pointer]) {
				forward(3);
				plus(1);
				backward(3);
				minus(1);
			}

			backward(1);
			minus(1);
			backward(3);
		}

		forward(3);
		plus(1);
		backward(8);

		while(memory[pointer]) {
			backward(2);
		}

		forward(4);

		while(memory[pointer]) {
			minus(1);
			forward(1);

			while(memory[pointer]) {
				backward(3);
				plus(1);
				forward(4);

				while(memory[pointer]) {
					forward(2);
				}

				forward(1);
				plus(1);
				backward(3);

				while(memory[pointer]) {
					backward(2);
				}

				forward(1);
				minus(1);
			}

			backward(3);
			minus(1);

			while(memory[pointer]) {
				forward(3);
				plus(1);
				backward(3);
				minus(1);
			}

			plus(1);
			forward(4);

			while(memory[pointer]) {
				forward(2);
			}

			plus(1);
			forward(1);

			while(memory[pointer]) {
				minus(1);

				while(memory[pointer]) {
					minus(1);

					while(memory[pointer]) {
						minus(1);
						backward(1);
						minus(1);
						forward(6);

						while(memory[pointer]) {

							while(memory[pointer]) {
								forward(3);
							}

							forward(2);
						}

						backward(5);

						while(memory[pointer]) {
							forward(1);
							plus(1);
							backward(1);
							minus(1);
							backward(3);
						}

						backward(2);

						while(memory[pointer]) {
							backward(3);
						}

						forward(3);

						while(memory[pointer]) {
							minus(1);
							forward(3);

							while(memory[pointer]) {
								forward(3);
							}

							forward(2);

							while(memory[pointer]) {
								forward(3);
							}

							plus(1);

							while(memory[pointer]) {
								backward(3);
							}

							backward(2);

							while(memory[pointer]) {
								backward(3);
							}

							plus(1);
							forward(3);
						}

						forward(3);

						while(memory[pointer]) {
							backward(1);

							while(memory[pointer]) {
								minus(1);
							}

							plus(1);
							forward(1);
							minus(1);
							forward(3);
						}

						backward(1);

						while(memory[pointer]) {
							forward(3);
						}

						backward(3);

						while(memory[pointer]) {
							forward(1);
							plus(9);
							backward(4);
						}

						backward(2);

						while(memory[pointer]) {
							backward(3);
						}

						forward(3);

						while(memory[pointer]) {
							minus(1);
							forward(1);

							while(memory[pointer]) {
								backward(2);
								plus(1);
								forward(1);
								plus(1);
								forward(1);
								minus(1);
							}

							backward(1);

							while(memory[pointer]) {
								forward(1);
								plus(1);
								backward(1);
								minus(1);
							}

							forward(1);

							while(memory[pointer]) {
								forward(2);

								while(memory[pointer]) {
									forward(3);
								}

								forward(4);

								while(memory[pointer]) {
									forward(3);
								}

								backward(1);
								minus(1);
								backward(2);

								while(memory[pointer]) {
									backward(3);
								}

								backward(4);

								while(memory[pointer]) {
									backward(3);
								}

								forward(1);
								minus(1);
							}

							forward(2);

							while(memory[pointer]) {
								forward(3);
							}

							forward(4);

							while(memory[pointer]) {
								forward(3);
							}

							plus(1);

							while(memory[pointer]) {
								backward(3);
							}

							backward(4);

							while(memory[pointer]) {
								backward(3);
							}

							backward(1);

							while(memory[pointer]) {
								forward(2);
								plus(1);
								backward(2);
								minus(1);
							}

							forward(1);
							plus(1);
							forward(3);
						}

						forward(4);

						while(memory[pointer]) {
							minus(1);
							forward(3);
						}

						backward(2);

						while(memory[pointer]) {
							forward(3);
						}

						backward(3);

						while(memory[pointer]) {
							forward(1);

							while(memory[pointer]) {
								minus(1);

								while(memory[pointer]) {
									minus(1);

									while(memory[pointer]) {
										minus(1);

										while(memory[pointer]) {
											minus(1);

											while(memory[pointer]) {
												minus(1);

												while(memory[pointer]) {
													minus(1);

													while(memory[pointer]) {
														minus(1);

														while(memory[pointer]) {
															minus(1);

															while(memory[pointer]) {
																minus(1);
																backward(1);
																minus(1);
																forward(1);

																while(memory[pointer]) {
																	backward(1);
																	plus(1);
																	forward(1);

																	while(memory[pointer]) {
																		minus(1);
																	}

																	forward(1);
																	plus(1);
																	backward(1);
																}

															}

														}

													}

												}

											}

										}

									}

								}

							}

							backward(1);

							while(memory[pointer]) {

								while(memory[pointer]) {
									forward(2);

									while(memory[pointer]) {
										backward(3);
										plus(1);
										forward(3);
										minus(1);
									}

									backward(1);

									while(memory[pointer]) {
										minus(1);
									}

									backward(1);
									minus(1);
									backward(3);
								}

								forward(3);
							}

							backward(3);
						}

						forward(1);
						plus(1);
						forward(1);

						while(memory[pointer]) {
							minus(1);
							backward(1);
							minus(1);
							backward(3);

							while(memory[pointer]) {

								while(memory[pointer]) {
									backward(3);
								}

								backward(2);
							}

							backward(3);

							while(memory[pointer]) {
								backward(2);
							}

							plus(1);
							forward(2);
							minus(1);
							forward(2);

							while(memory[pointer]) {
								forward(2);
							}

							forward(7);
							minus(1);
							backward(1);

							while(memory[pointer]) {

								while(memory[pointer]) {
									forward(3);
								}

								forward(2);
							}

							backward(1);
						}

						backward(1);

						while(memory[pointer]) {
							minus(1);
							backward(3);

							while(memory[pointer]) {

								while(memory[pointer]) {
									backward(3);
								}

								backward(2);
							}

							backward(3);

							while(memory[pointer]) {
								backward(2);
							}

							plus(1);

							while(memory[pointer]) {
								backward(2);
							}

							forward(2);
							minus(1);
							forward(2);

							while(memory[pointer]) {
								forward(2);
							}

							forward(6);

							while(memory[pointer]) {

								while(memory[pointer]) {
									forward(3);
								}

								forward(2);
							}

							backward(2);
						}

						backward(3);

						while(memory[pointer]) {

							while(memory[pointer]) {
								backward(3);
							}

							backward(2);
						}

					}

					backward(1);

					while(memory[pointer]) {
						minus(1);
						forward(7);
						plus(1);

						while(memory[pointer]) {
							backward(2);
							plus(1);
							forward(1);
							plus(1);
							forward(1);
							minus(1);
						}

						backward(1);
						minus(1);

						while(memory[pointer]) {
							forward(1);
							plus(1);
							backward(1);
							minus(1);
						}

						plus(1);
						backward(1);

						while(memory[pointer]) {
							minus(1);

							while(memory[pointer]) {
								minus(1);

								while(memory[pointer]) {
									minus(1);

									while(memory[pointer]) {
										minus(1);

										while(memory[pointer]) {
											minus(1);

											while(memory[pointer]) {
												minus(1);

												while(memory[pointer]) {
													minus(1);

													while(memory[pointer]) {
														minus(1);

														while(memory[pointer]) {
															minus(1);

															while(memory[pointer]) {
																minus(1);
																forward(2);
																minus(1);
																backward(9);

																while(memory[pointer]) {
																	backward(2);
																}

																plus(1);
																forward(8);
																minus(1);
																forward(2);

																while(memory[pointer]) {
																	forward(2);
																}

																forward(5);
															}

														}

													}

												}

											}

										}

									}

								}

							}

						}

						backward(5);
					}

					forward(1);
				}

				backward(1);

				while(memory[pointer]) {
					minus(1);
					forward(7);

					while(memory[pointer]) {
						backward(3);
						plus(1);
						forward(1);
						plus(1);
						forward(2);
						minus(1);
					}

					backward(2);

					while(memory[pointer]) {
						forward(2);
						plus(1);
						backward(2);
						minus(1);
					}

					plus(1);
					backward(1);

					while(memory[pointer]) {
						forward(1);
						minus(1);
						backward(1);

						while(memory[pointer]) {
							forward(2);

							while(memory[pointer]) {
								forward(3);
							}

							forward(2);

							while(memory[pointer]) {
								forward(3);
							}

							forward(2);

							while(memory[pointer]) {
								forward(3);
							}

							backward(3);

							while(memory[pointer]) {
								minus(1);
								backward(3);
							}

							backward(2);

							while(memory[pointer]) {
								backward(3);
							}

							backward(2);

							while(memory[pointer]) {
								backward(3);
							}

							forward(3);

							while(memory[pointer]) {
								minus(1);
								forward(1);

								while(memory[pointer]) {
									backward(2);
									plus(1);
									forward(1);
									plus(1);
									forward(1);
									minus(1);
								}

								backward(1);

								while(memory[pointer]) {
									forward(1);
									plus(1);
									backward(1);
									minus(1);
								}

								backward(1);

								while(memory[pointer]) {
									forward(4);

									while(memory[pointer]) {
										forward(3);
									}

									forward(2);

									while(memory[pointer]) {
										forward(3);
									}

									forward(2);

									while(memory[pointer]) {
										forward(3);
									}

									forward(1);
									plus(2);
									backward(4);

									while(memory[pointer]) {
										backward(3);
									}

									backward(2);

									while(memory[pointer]) {
										backward(3);
									}

									backward(2);

									while(memory[pointer]) {
										backward(3);
									}

									backward(1);
									minus(1);
								}

								forward(4);

								while(memory[pointer]) {
									forward(3);
								}

								forward(2);

								while(memory[pointer]) {
									forward(3);
								}

								forward(2);

								while(memory[pointer]) {
									forward(3);
								}

								plus(1);

								while(memory[pointer]) {
									backward(3);
								}

								backward(2);

								while(memory[pointer]) {
									backward(3);
								}

								backward(2);

								while(memory[pointer]) {
									backward(3);
								}

								plus(1);
								forward(3);
							}

							backward(3);

							while(memory[pointer]) {
								backward(3);
							}

							forward(1);
							minus(1);
						}

						forward(2);

						while(memory[pointer]) {
							forward(3);
						}

						forward(2);

						while(memory[pointer]) {
							forward(3);
						}

						forward(2);

						while(memory[pointer]) {
							minus(1);
							forward(1);

							while(memory[pointer]) {
								backward(1);
								plus(1);
								forward(2);
								plus(1);
								backward(1);
								minus(1);
							}

							backward(1);

							while(memory[pointer]) {

								while(memory[pointer]) {
									backward(1);
									plus(1);
									forward(2);
									plus(1);
									backward(1);
									minus(1);
								}

								backward(1);

								while(memory[pointer]) {
									forward(1);
									plus(1);
									backward(1);
									minus(1);
								}

								forward(1);
								minus(1);
								forward(1);
								minus(1);

								while(memory[pointer]) {
									backward(1);
									minus(1);
									forward(1);
									minus(1);

									while(memory[pointer]) {
										backward(1);
										minus(1);
										forward(1);
										minus(1);

										while(memory[pointer]) {
											backward(1);
											minus(1);
											forward(1);
											minus(1);

											while(memory[pointer]) {
												backward(1);
												minus(1);
												forward(1);
												minus(1);

												while(memory[pointer]) {
													backward(1);
													minus(1);
													forward(1);
													minus(1);

													while(memory[pointer]) {
														backward(1);
														minus(1);
														forward(1);
														minus(1);

														while(memory[pointer]) {
															backward(1);
															minus(1);
															forward(1);
															minus(1);

															while(memory[pointer]) {
																backward(1);
																minus(1);
																forward(1);
																minus(1);

																while(memory[pointer]) {
																	backward(1);
																	minus(1);
																	forward(1);

																	while(memory[pointer]) {
																		minus(1);
																	}

																	forward(1);
																	minus(10);
																	forward(1);

																	while(memory[pointer]) {
																		minus(1);
																	}

																	plus(1);
																	forward(1);
																	plus(1);
																	backward(3);
																}

															}

														}

													}

												}

											}

										}

									}

								}

								backward(1);
							}

							plus(1);
							forward(2);

							while(memory[pointer]) {
								backward(1);
								plus(1);
								forward(1);
								minus(1);
							}

							forward(1);
						}

						backward(3);

						while(memory[pointer]) {

							while(memory[pointer]) {
								backward(3);
							}

							backward(2);
						}

						forward(6);

						while(memory[pointer]) {
							backward(2);
							plus(1);
							forward(3);
							plus(1);
							backward(1);
							minus(1);
						}

						forward(1);

						while(memory[pointer]) {
							backward(1);
							plus(1);
							forward(1);
							minus(1);
						}

						backward(3);

						while(memory[pointer]) {
							forward(1);

							while(memory[pointer]) {

								while(memory[pointer]) {
									forward(3);
								}

								forward(2);
							}

							backward(1);
							plus(1);
							backward(4);

							while(memory[pointer]) {

								while(memory[pointer]) {
									backward(3);
								}

								backward(2);
							}

							forward(4);
							minus(1);
						}

						forward(1);

						while(memory[pointer]) {

							while(memory[pointer]) {
								forward(3);
							}

							forward(2);
						}

						forward(1);
						plus(1);
						backward(2);
						minus(1);

						while(memory[pointer]) {
							forward(1);
							plus(1);
							backward(1);
							minus(1);
						}

						forward(1);

						while(memory[pointer]) {
							forward(1);
							plus(3);
							backward(1);
							minus(1);

							while(memory[pointer]) {
								forward(1);
								plus(5);
								backward(1);
								minus(1);

								while(memory[pointer]) {
									forward(1);
									minus(3);
									forward(2);
									plus(1);
									forward(1);
									plus(1);
									backward(4);
									minus(1);

									while(memory[pointer]) {
										forward(1);
										minus(1);
										forward(3);
										plus(1);
										backward(4);
										minus(1);

										while(memory[pointer]) {
											forward(1);
											plus(1);
											forward(3);
											plus(1);
											backward(4);
											minus(1);

											while(memory[pointer]) {
												forward(1);
												plus(3);
												forward(3);
												plus(1);
												backward(4);
												minus(1);

												while(memory[pointer]) {
													forward(1);
													minus(5);
													forward(3);
													plus(2);
													backward(4);
													minus(1);

													while(memory[pointer]) {
														forward(1);
														minus(3);
														forward(3);
														plus(2);
														backward(4);
														minus(1);
													}

												}

											}

										}

									}

								}

							}

						}

						plus(1);

						while(memory[pointer]) {

							while(memory[pointer]) {
								backward(3);
							}

							backward(2);
						}

						forward(3);
					}

					forward(1);

					while(memory[pointer]) {
						minus(1);
						forward(1);

						while(memory[pointer]) {

							while(memory[pointer]) {
								forward(3);
							}

							forward(2);
						}

						plus(1);
						forward(5);
						plus(1);

						while(memory[pointer]) {

							while(memory[pointer]) {
								backward(3);
							}

							backward(2);
						}

						forward(4);
					}

					backward(5);
				}

				forward(1);
			}

			backward(1);

			while(memory[pointer]) {
				minus(1);
				forward(6);

				while(memory[pointer]) {

					while(memory[pointer]) {
						forward(3);
					}

					forward(2);
				}

				backward(5);

				while(memory[pointer]) {
					backward(3);
				}

				forward(3);

				while(memory[pointer]) {
					minus(1);
					backward(3);

					while(memory[pointer]) {
						backward(3);
					}

					backward(2);

					while(memory[pointer]) {
						backward(3);
					}

					forward(2);

					while(memory[pointer]) {
						forward(3);
					}

					plus(1);
					forward(1);

					while(memory[pointer]) {
						forward(3);
					}

					forward(2);

					while(memory[pointer]) {
						forward(3);
					}

					forward(1);

					while(memory[pointer]) {
						backward(4);

						while(memory[pointer]) {
							backward(3);
						}

						backward(2);

						while(memory[pointer]) {
							backward(3);
						}

						forward(2);

						while(memory[pointer]) {
							forward(3);
						}

						backward(3);
						plus(1);
						forward(1);

						while(memory[pointer]) {
							forward(3);
						}

						forward(2);

						while(memory[pointer]) {
							forward(3);
						}

						forward(1);
						minus(1);
					}

					backward(1);
					plus(1);
					forward(3);
				}

				backward(3);

				while(memory[pointer]) {
					minus(1);
					backward(3);
				}

				backward(2);

				while(memory[pointer]) {
					backward(3);
				}

				forward(2);

				while(memory[pointer]) {
					minus(1);
					forward(3);
				}

				backward(2);

				while(memory[pointer]) {
					backward(3);
				}

				forward(3);

				while(memory[pointer]) {
					plus(8);
					backward(1);

					while(memory[pointer]) {
						forward(1);
						minus(1);
						backward(1);
						minus(1);
					}

					forward(1);

					while(memory[pointer]) {
						forward(1);
						plus(1);
						backward(1);
						minus(1);
					}

					plus(1);
					forward(3);
				}

				backward(3);

				while(memory[pointer]) {
					backward(3);
				}

				forward(4);
				plus(1);
				backward(1);

				while(memory[pointer]) {
					minus(1);
					forward(1);

					while(memory[pointer]) {
						backward(2);
						plus(1);
						forward(1);
						plus(1);
						forward(1);
						minus(1);
					}

					backward(1);

					while(memory[pointer]) {
						minus(1);

						while(memory[pointer]) {
							minus(1);

							while(memory[pointer]) {
								minus(1);

								while(memory[pointer]) {
									minus(1);

									while(memory[pointer]) {
										minus(1);

										while(memory[pointer]) {
											minus(1);

											while(memory[pointer]) {
												minus(1);

												while(memory[pointer]) {
													minus(1);

													while(memory[pointer]) {
														minus(1);

														while(memory[pointer]) {
															backward(1);
															minus(10);
															forward(4);

															while(memory[pointer]) {
																minus(1);
															}

															plus(1);
															forward(1);
															plus(1);
															backward(4);

															while(memory[pointer]) {
																minus(1);
															}

														}

													}

												}

											}

										}

									}

								}

							}

						}

					}

					backward(1);

					while(memory[pointer]) {
						forward(2);
						plus(1);
						backward(2);
						minus(1);
					}

					forward(1);
					plus(1);
					forward(3);
				}

				backward(2);

				while(memory[pointer]) {
					minus(1);
					backward(1);
				}

				backward(2);

				while(memory[pointer]) {
					backward(3);
				}

				forward(3);
				minus(1);
				forward(1);

				while(memory[pointer]) {
					backward(2);
					plus(1);
					forward(2);
					minus(1);
				}

				forward(2);

				while(memory[pointer]) {
					forward(3);
				}

				backward(3);

				while(memory[pointer]) {
					forward(2);
					plus(1);
					backward(1);

					while(memory[pointer]) {
						forward(1);
						minus(1);
						backward(2);

						while(memory[pointer]) {
							backward(3);
						}

						forward(1);
					}

					forward(1);

					while(memory[pointer]) {
						minus(1);
						backward(2);
						minus(1);
						backward(1);
					}

					backward(2);
				}

				plus(1);
				backward(1);

				while(memory[pointer]) {
					forward(2);
					plus(1);
					backward(2);
					minus(1);
				}

				forward(1);

				while(memory[pointer]) {

					while(memory[pointer]) {
						backward(3);
					}

					backward(2);
				}

				backward(1);
			}

			backward(2);

			while(memory[pointer]) {
				backward(2);
			}

			plus(1);
			forward(2);
		}

		forward(1);
		plus(1);
		forward(1);

		while(memory[pointer]) {
			forward(1);
			plus(5);

			while(memory[pointer]) {
				forward(1);
				plus(2);
				forward(1);
				plus(2);
				backward(2);
				minus(1);
			}

			backward(1);
			minus(1);
		}

		forward(5);

		while(memory[pointer]) {
			backward(3);
			plus(1);
			forward(1);
			plus(1);
			forward(1);
			plus(1);
			forward(1);
			minus(1);
		}

		backward(1);
		minus(1);

		while(memory[pointer]) {
			forward(1);
			plus(1);
			backward(1);
			minus(1);
		}

		plus(1);
		backward(2);

		while(memory[pointer]) {
			backward(1);

			while(memory[pointer]) {
				backward(1);
				plus(1);
				forward(1);
				minus(1);
			}

			backward(2);

			while(memory[pointer]) {
				forward(2);
				plus(1);
				backward(2);
				minus(1);
			}

			forward(1);

			while(memory[pointer]) {
				backward(1);
				plus(1);
				forward(1);
				minus(1);
			}

			forward(2);
			minus(1);
		}

		backward(3);

		while(memory[pointer]) {
			minus(1);
		}

		forward(2);

		while(memory[pointer]) {
			backward(1);
			plus(1);
			forward(3);
			minus(1);
			backward(2);
			minus(1);
		}

		plus(6);

		while(memory[pointer]) {
			forward(1);
			plus(8);
			backward(1);
			minus(1);
		}

		forward(2);

		while(memory[pointer]) {
			backward(1);
			plus(1);
			forward(1);
			minus(2);
		}

		backward(1);
		write();

		while(memory[pointer]) {
			minus(1);
		}

		forward(2);

		while(memory[pointer]) {
			forward(3);
		}

		forward(3);
		minus(5);
	}



    console.log(stdout);

    fs.writeFile('result/' + path.basename(__filename) + '.out', stdout, err => {
        if (err) console.error(err)
    })
})();
