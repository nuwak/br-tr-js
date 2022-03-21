(function () {
    let data = [0];
    let pointer = 0;
    let stdout = "";

    const forward = (count) => {
        pointer += count;
        if (!data[pointer]) data[pointer] = 0;
    }

    const backward = (count) => {
        pointer -= count;
        if (!data[pointer]) data[pointer] = 0;
    }

    const plus = (count) => {
        data[pointer] += count;
    }

    const minus = (count) => {
        data[pointer] -= count;
    }

    function write(count) {
        while (count) {
            stdout += String.fromCharCode(data[pointer]);
            count -= 1;
        }
    }

    function read(count) {
        while (count) {
            data[pointer] = prompt("Enter a byte value").charCodeAt(0);
            count -= 1;
        }
    }

	
	plus(6);

	while(data[pointer]) {
		forward(1);
		plus(8);
		backward(1);
		minus(1);
	}

	forward(1);
	plus(1);
	write(1);
	minus(3);
	write(1);
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

	while(data[pointer]) {
		plus(5);
		backward(1);

		while(data[pointer]) {
			forward(3);
		}

		backward(3);

		while(data[pointer]) {
			forward(9);
			plus(1);
			backward(8);

			while(data[pointer]) {
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

		while(data[pointer]) {
			backward(3);
		}

		backward(5);

		while(data[pointer]) {
			forward(3);
			plus(1);
			backward(2);

			while(data[pointer]) {
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

		while(data[pointer]) {
			backward(2);
		}

		forward(4);

		while(data[pointer]) {
			minus(1);
			forward(1);

			while(data[pointer]) {
				backward(3);
				plus(1);
				forward(4);

				while(data[pointer]) {
					forward(2);
				}

				forward(1);
				plus(1);
				backward(3);

				while(data[pointer]) {
					backward(2);
				}

				forward(1);
				minus(1);
			}

			backward(3);
			minus(1);

			while(data[pointer]) {
				forward(3);
				plus(1);
				backward(3);
				minus(1);
			}

			plus(1);
			forward(4);

			while(data[pointer]) {
				forward(2);
			}

			plus(1);
			forward(1);

			while(data[pointer]) {
				minus(1);

				while(data[pointer]) {
					minus(1);

					while(data[pointer]) {
						minus(1);
						backward(1);
						minus(1);
						forward(6);

						while(data[pointer]) {

							while(data[pointer]) {
								forward(3);
							}

							forward(2);
						}

						backward(5);

						while(data[pointer]) {
							forward(1);
							plus(1);
							backward(1);
							minus(1);
							backward(3);
						}

						backward(2);

						while(data[pointer]) {
							backward(3);
						}

						forward(3);

						while(data[pointer]) {
							minus(1);
							forward(3);

							while(data[pointer]) {
								forward(3);
							}

							forward(2);

							while(data[pointer]) {
								forward(3);
							}

							plus(1);

							while(data[pointer]) {
								backward(3);
							}

							backward(2);

							while(data[pointer]) {
								backward(3);
							}

							plus(1);
							forward(3);
						}

						forward(3);

						while(data[pointer]) {
							backward(1);

							while(data[pointer]) {
								minus(1);
							}

							plus(1);
							forward(1);
							minus(1);
							forward(3);
						}

						backward(1);

						while(data[pointer]) {
							forward(3);
						}

						backward(3);

						while(data[pointer]) {
							forward(1);
							plus(9);
							backward(4);
						}

						backward(2);

						while(data[pointer]) {
							backward(3);
						}

						forward(3);

						while(data[pointer]) {
							minus(1);
							forward(1);

							while(data[pointer]) {
								backward(2);
								plus(1);
								forward(1);
								plus(1);
								forward(1);
								minus(1);
							}

							backward(1);

							while(data[pointer]) {
								forward(1);
								plus(1);
								backward(1);
								minus(1);
							}

							forward(1);

							while(data[pointer]) {
								forward(2);

								while(data[pointer]) {
									forward(3);
								}

								forward(4);

								while(data[pointer]) {
									forward(3);
								}

								backward(1);
								minus(1);
								backward(2);

								while(data[pointer]) {
									backward(3);
								}

								backward(4);

								while(data[pointer]) {
									backward(3);
								}

								forward(1);
								minus(1);
							}

							forward(2);

							while(data[pointer]) {
								forward(3);
							}

							forward(4);

							while(data[pointer]) {
								forward(3);
							}

							plus(1);

							while(data[pointer]) {
								backward(3);
							}

							backward(4);

							while(data[pointer]) {
								backward(3);
							}

							backward(1);

							while(data[pointer]) {
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

						while(data[pointer]) {
							minus(1);
							forward(3);
						}

						backward(2);

						while(data[pointer]) {
							forward(3);
						}

						backward(3);

						while(data[pointer]) {
							forward(1);

							while(data[pointer]) {
								minus(1);

								while(data[pointer]) {
									minus(1);

									while(data[pointer]) {
										minus(1);

										while(data[pointer]) {
											minus(1);

											while(data[pointer]) {
												minus(1);

												while(data[pointer]) {
													minus(1);

													while(data[pointer]) {
														minus(1);

														while(data[pointer]) {
															minus(1);

															while(data[pointer]) {
																minus(1);
																backward(1);
																minus(1);
																forward(1);

																while(data[pointer]) {
																	backward(1);
																	plus(1);
																	forward(1);

																	while(data[pointer]) {
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

							while(data[pointer]) {

								while(data[pointer]) {
									forward(2);

									while(data[pointer]) {
										backward(3);
										plus(1);
										forward(3);
										minus(1);
									}

									backward(1);

									while(data[pointer]) {
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

						while(data[pointer]) {
							minus(1);
							backward(1);
							minus(1);
							backward(3);

							while(data[pointer]) {

								while(data[pointer]) {
									backward(3);
								}

								backward(2);
							}

							backward(3);

							while(data[pointer]) {
								backward(2);
							}

							plus(1);
							forward(2);
							minus(1);
							forward(2);

							while(data[pointer]) {
								forward(2);
							}

							forward(7);
							minus(1);
							backward(1);

							while(data[pointer]) {

								while(data[pointer]) {
									forward(3);
								}

								forward(2);
							}

							backward(1);
						}

						backward(1);

						while(data[pointer]) {
							minus(1);
							backward(3);

							while(data[pointer]) {

								while(data[pointer]) {
									backward(3);
								}

								backward(2);
							}

							backward(3);

							while(data[pointer]) {
								backward(2);
							}

							plus(1);

							while(data[pointer]) {
								backward(2);
							}

							forward(2);
							minus(1);
							forward(2);

							while(data[pointer]) {
								forward(2);
							}

							forward(6);

							while(data[pointer]) {

								while(data[pointer]) {
									forward(3);
								}

								forward(2);
							}

							backward(2);
						}

						backward(3);

						while(data[pointer]) {

							while(data[pointer]) {
								backward(3);
							}

							backward(2);
						}

					}

					backward(1);

					while(data[pointer]) {
						minus(1);
						forward(7);
						plus(1);

						while(data[pointer]) {
							backward(2);
							plus(1);
							forward(1);
							plus(1);
							forward(1);
							minus(1);
						}

						backward(1);
						minus(1);

						while(data[pointer]) {
							forward(1);
							plus(1);
							backward(1);
							minus(1);
						}

						plus(1);
						backward(1);

						while(data[pointer]) {
							minus(1);

							while(data[pointer]) {
								minus(1);

								while(data[pointer]) {
									minus(1);

									while(data[pointer]) {
										minus(1);

										while(data[pointer]) {
											minus(1);

											while(data[pointer]) {
												minus(1);

												while(data[pointer]) {
													minus(1);

													while(data[pointer]) {
														minus(1);

														while(data[pointer]) {
															minus(1);

															while(data[pointer]) {
																minus(1);
																forward(2);
																minus(1);
																backward(9);

																while(data[pointer]) {
																	backward(2);
																}

																plus(1);
																forward(8);
																minus(1);
																forward(2);

																while(data[pointer]) {
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

				while(data[pointer]) {
					minus(1);
					forward(7);

					while(data[pointer]) {
						backward(3);
						plus(1);
						forward(1);
						plus(1);
						forward(2);
						minus(1);
					}

					backward(2);

					while(data[pointer]) {
						forward(2);
						plus(1);
						backward(2);
						minus(1);
					}

					plus(1);
					backward(1);

					while(data[pointer]) {
						forward(1);
						minus(1);
						backward(1);

						while(data[pointer]) {
							forward(2);

							while(data[pointer]) {
								forward(3);
							}

							forward(2);

							while(data[pointer]) {
								forward(3);
							}

							forward(2);

							while(data[pointer]) {
								forward(3);
							}

							backward(3);

							while(data[pointer]) {
								minus(1);
								backward(3);
							}

							backward(2);

							while(data[pointer]) {
								backward(3);
							}

							backward(2);

							while(data[pointer]) {
								backward(3);
							}

							forward(3);

							while(data[pointer]) {
								minus(1);
								forward(1);

								while(data[pointer]) {
									backward(2);
									plus(1);
									forward(1);
									plus(1);
									forward(1);
									minus(1);
								}

								backward(1);

								while(data[pointer]) {
									forward(1);
									plus(1);
									backward(1);
									minus(1);
								}

								backward(1);

								while(data[pointer]) {
									forward(4);

									while(data[pointer]) {
										forward(3);
									}

									forward(2);

									while(data[pointer]) {
										forward(3);
									}

									forward(2);

									while(data[pointer]) {
										forward(3);
									}

									forward(1);
									plus(2);
									backward(4);

									while(data[pointer]) {
										backward(3);
									}

									backward(2);

									while(data[pointer]) {
										backward(3);
									}

									backward(2);

									while(data[pointer]) {
										backward(3);
									}

									backward(1);
									minus(1);
								}

								forward(4);

								while(data[pointer]) {
									forward(3);
								}

								forward(2);

								while(data[pointer]) {
									forward(3);
								}

								forward(2);

								while(data[pointer]) {
									forward(3);
								}

								plus(1);

								while(data[pointer]) {
									backward(3);
								}

								backward(2);

								while(data[pointer]) {
									backward(3);
								}

								backward(2);

								while(data[pointer]) {
									backward(3);
								}

								plus(1);
								forward(3);
							}

							backward(3);

							while(data[pointer]) {
								backward(3);
							}

							forward(1);
							minus(1);
						}

						forward(2);

						while(data[pointer]) {
							forward(3);
						}

						forward(2);

						while(data[pointer]) {
							forward(3);
						}

						forward(2);

						while(data[pointer]) {
							minus(1);
							forward(1);

							while(data[pointer]) {
								backward(1);
								plus(1);
								forward(2);
								plus(1);
								backward(1);
								minus(1);
							}

							backward(1);

							while(data[pointer]) {

								while(data[pointer]) {
									backward(1);
									plus(1);
									forward(2);
									plus(1);
									backward(1);
									minus(1);
								}

								backward(1);

								while(data[pointer]) {
									forward(1);
									plus(1);
									backward(1);
									minus(1);
								}

								forward(1);
								minus(1);
								forward(1);
								minus(1);

								while(data[pointer]) {
									backward(1);
									minus(1);
									forward(1);
									minus(1);

									while(data[pointer]) {
										backward(1);
										minus(1);
										forward(1);
										minus(1);

										while(data[pointer]) {
											backward(1);
											minus(1);
											forward(1);
											minus(1);

											while(data[pointer]) {
												backward(1);
												minus(1);
												forward(1);
												minus(1);

												while(data[pointer]) {
													backward(1);
													minus(1);
													forward(1);
													minus(1);

													while(data[pointer]) {
														backward(1);
														minus(1);
														forward(1);
														minus(1);

														while(data[pointer]) {
															backward(1);
															minus(1);
															forward(1);
															minus(1);

															while(data[pointer]) {
																backward(1);
																minus(1);
																forward(1);
																minus(1);

																while(data[pointer]) {
																	backward(1);
																	minus(1);
																	forward(1);

																	while(data[pointer]) {
																		minus(1);
																	}

																	forward(1);
																	minus(10);
																	forward(1);

																	while(data[pointer]) {
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

							while(data[pointer]) {
								backward(1);
								plus(1);
								forward(1);
								minus(1);
							}

							forward(1);
						}

						backward(3);

						while(data[pointer]) {

							while(data[pointer]) {
								backward(3);
							}

							backward(2);
						}

						forward(6);

						while(data[pointer]) {
							backward(2);
							plus(1);
							forward(3);
							plus(1);
							backward(1);
							minus(1);
						}

						forward(1);

						while(data[pointer]) {
							backward(1);
							plus(1);
							forward(1);
							minus(1);
						}

						backward(3);

						while(data[pointer]) {
							forward(1);

							while(data[pointer]) {

								while(data[pointer]) {
									forward(3);
								}

								forward(2);
							}

							backward(1);
							plus(1);
							backward(4);

							while(data[pointer]) {

								while(data[pointer]) {
									backward(3);
								}

								backward(2);
							}

							forward(4);
							minus(1);
						}

						forward(1);

						while(data[pointer]) {

							while(data[pointer]) {
								forward(3);
							}

							forward(2);
						}

						forward(1);
						plus(1);
						backward(2);
						minus(1);

						while(data[pointer]) {
							forward(1);
							plus(1);
							backward(1);
							minus(1);
						}

						forward(1);

						while(data[pointer]) {
							forward(1);
							plus(3);
							backward(1);
							minus(1);

							while(data[pointer]) {
								forward(1);
								plus(5);
								backward(1);
								minus(1);

								while(data[pointer]) {
									forward(1);
									minus(3);
									forward(2);
									plus(1);
									forward(1);
									plus(1);
									backward(4);
									minus(1);

									while(data[pointer]) {
										forward(1);
										minus(1);
										forward(3);
										plus(1);
										backward(4);
										minus(1);

										while(data[pointer]) {
											forward(1);
											plus(1);
											forward(3);
											plus(1);
											backward(4);
											minus(1);

											while(data[pointer]) {
												forward(1);
												plus(3);
												forward(3);
												plus(1);
												backward(4);
												minus(1);

												while(data[pointer]) {
													forward(1);
													minus(5);
													forward(3);
													plus(2);
													backward(4);
													minus(1);

													while(data[pointer]) {
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

						while(data[pointer]) {

							while(data[pointer]) {
								backward(3);
							}

							backward(2);
						}

						forward(3);
					}

					forward(1);

					while(data[pointer]) {
						minus(1);
						forward(1);

						while(data[pointer]) {

							while(data[pointer]) {
								forward(3);
							}

							forward(2);
						}

						plus(1);
						forward(5);
						plus(1);

						while(data[pointer]) {

							while(data[pointer]) {
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

			while(data[pointer]) {
				minus(1);
				forward(6);

				while(data[pointer]) {

					while(data[pointer]) {
						forward(3);
					}

					forward(2);
				}

				backward(5);

				while(data[pointer]) {
					backward(3);
				}

				forward(3);

				while(data[pointer]) {
					minus(1);
					backward(3);

					while(data[pointer]) {
						backward(3);
					}

					backward(2);

					while(data[pointer]) {
						backward(3);
					}

					forward(2);

					while(data[pointer]) {
						forward(3);
					}

					plus(1);
					forward(1);

					while(data[pointer]) {
						forward(3);
					}

					forward(2);

					while(data[pointer]) {
						forward(3);
					}

					forward(1);

					while(data[pointer]) {
						backward(4);

						while(data[pointer]) {
							backward(3);
						}

						backward(2);

						while(data[pointer]) {
							backward(3);
						}

						forward(2);

						while(data[pointer]) {
							forward(3);
						}

						backward(3);
						plus(1);
						forward(1);

						while(data[pointer]) {
							forward(3);
						}

						forward(2);

						while(data[pointer]) {
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

				while(data[pointer]) {
					minus(1);
					backward(3);
				}

				backward(2);

				while(data[pointer]) {
					backward(3);
				}

				forward(2);

				while(data[pointer]) {
					minus(1);
					forward(3);
				}

				backward(2);

				while(data[pointer]) {
					backward(3);
				}

				forward(3);

				while(data[pointer]) {
					plus(8);
					backward(1);

					while(data[pointer]) {
						forward(1);
						minus(1);
						backward(1);
						minus(1);
					}

					forward(1);

					while(data[pointer]) {
						forward(1);
						plus(1);
						backward(1);
						minus(1);
					}

					plus(1);
					forward(3);
				}

				backward(3);

				while(data[pointer]) {
					backward(3);
				}

				forward(4);
				plus(1);
				backward(1);

				while(data[pointer]) {
					minus(1);
					forward(1);

					while(data[pointer]) {
						backward(2);
						plus(1);
						forward(1);
						plus(1);
						forward(1);
						minus(1);
					}

					backward(1);

					while(data[pointer]) {
						minus(1);

						while(data[pointer]) {
							minus(1);

							while(data[pointer]) {
								minus(1);

								while(data[pointer]) {
									minus(1);

									while(data[pointer]) {
										minus(1);

										while(data[pointer]) {
											minus(1);

											while(data[pointer]) {
												minus(1);

												while(data[pointer]) {
													minus(1);

													while(data[pointer]) {
														minus(1);

														while(data[pointer]) {
															backward(1);
															minus(10);
															forward(4);

															while(data[pointer]) {
																minus(1);
															}

															plus(1);
															forward(1);
															plus(1);
															backward(4);

															while(data[pointer]) {
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

					while(data[pointer]) {
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

				while(data[pointer]) {
					minus(1);
					backward(1);
				}

				backward(2);

				while(data[pointer]) {
					backward(3);
				}

				forward(3);
				minus(1);
				forward(1);

				while(data[pointer]) {
					backward(2);
					plus(1);
					forward(2);
					minus(1);
				}

				forward(2);

				while(data[pointer]) {
					forward(3);
				}

				backward(3);

				while(data[pointer]) {
					forward(2);
					plus(1);
					backward(1);

					while(data[pointer]) {
						forward(1);
						minus(1);
						backward(2);

						while(data[pointer]) {
							backward(3);
						}

						forward(1);
					}

					forward(1);

					while(data[pointer]) {
						minus(1);
						backward(2);
						minus(1);
						backward(1);
					}

					backward(2);
				}

				plus(1);
				backward(1);

				while(data[pointer]) {
					forward(2);
					plus(1);
					backward(2);
					minus(1);
				}

				forward(1);

				while(data[pointer]) {

					while(data[pointer]) {
						backward(3);
					}

					backward(2);
				}

				backward(1);
			}

			backward(2);

			while(data[pointer]) {
				backward(2);
			}

			plus(1);
			forward(2);
		}

		forward(1);
		plus(1);
		forward(1);

		while(data[pointer]) {
			forward(1);
			plus(5);

			while(data[pointer]) {
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

		while(data[pointer]) {
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

		while(data[pointer]) {
			forward(1);
			plus(1);
			backward(1);
			minus(1);
		}

		plus(1);
		backward(2);

		while(data[pointer]) {
			backward(1);

			while(data[pointer]) {
				backward(1);
				plus(1);
				forward(1);
				minus(1);
			}

			backward(2);

			while(data[pointer]) {
				forward(2);
				plus(1);
				backward(2);
				minus(1);
			}

			forward(1);

			while(data[pointer]) {
				backward(1);
				plus(1);
				forward(1);
				minus(1);
			}

			forward(2);
			minus(1);
		}

		backward(3);

		while(data[pointer]) {
			minus(1);
		}

		forward(2);

		while(data[pointer]) {
			backward(1);
			plus(1);
			forward(3);
			minus(1);
			backward(2);
			minus(1);
		}

		plus(6);

		while(data[pointer]) {
			forward(1);
			plus(8);
			backward(1);
			minus(1);
		}

		forward(2);

		while(data[pointer]) {
			backward(1);
			plus(1);
			forward(1);
			minus(2);
		}

		backward(1);
		write(1);

		while(data[pointer]) {
			minus(1);
		}

		forward(2);

		while(data[pointer]) {
			forward(3);
		}

		forward(3);
		minus(5);
	}



    console.log(stdout);
})();
