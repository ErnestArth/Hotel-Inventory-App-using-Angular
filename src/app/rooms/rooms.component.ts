import { Component, DoCheck } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements DoCheck {
  hotelName = 'Wilson hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Television, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 4.3,
    },
    {
      roomNumber: 2,
      roomType: 'Standard Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Television, Bathroom',
      price: 300,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 3.947,
    },
    {
      roomNumber: 3,
      roomType: 'Suite Room',
      amenities:
        'Air Conditioner, Free Wi-Fi, Television, Bathroom, Kitchen, Living Room',
      price: 1700,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 3.858,
    },
    {
      roomNumber: 4,
      roomType: 'Executive Room',
      amenities:
        'Air Conditioner, Free Wi-Fi, Television, Bathroom, Kitchen, Living Room, Meeting Room',
      price: 2000,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 4.78,
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Super Executive Room',
      amenities:
        'Air Conditioner, Free Wi-Fi, Television, Bathroom, Kitchen, Living Room, Meeting Room, Refrigerator',
      price: 2500,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 4.8,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  ngDoCheck() {
    console.log('on changes is called');
  }
}
